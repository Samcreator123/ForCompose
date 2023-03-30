using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace ClickWorker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkerController: ControllerBase
    {
        [HttpGet]
        [Route("[action]")]
        public void Click()
        {
            using var connection = new SqlConnection("server=127.0.0.1;database=TEST;uid=sa;pwd=Sam008125;Connection Timeout=3000");

            connection.Open();

            var command = new SqlCommand();

            command.Connection = connection;

            command.CommandText = @"SELECT * FROM Click_Counter";

            var reader = command.ExecuteReader();

            if (!reader.HasRows)
            {
                reader.Close();

                command.CommandText = @"INSERT Click_Counter VALUES(@key,@num)";
                command.Parameters.AddWithValue("@num", 0);
                command.Parameters.AddWithValue("@key", "key");
                command.ExecuteNonQuery();
            }
            else
            {
                reader.Close();

            }

            command.Parameters.Clear();
            command.CommandText = @"SELECT * FROM Click_Counter";
            
            reader = command.ExecuteReader();


            string key = "";
            int numBefore = 0;

            while (reader.Read())
            {
                key = reader.GetString(0);
                numBefore = (int)reader.GetDecimal(1);
                break;
            }
            reader.Close();

            int numNow = numBefore + 1;

            command.CommandText = @"UPDATE Click_Counter SET Number = @num WHERE CounterKey = @key";
            command.Parameters.AddWithValue("@num", numNow);
            command.Parameters.AddWithValue("@key", key);

            command.ExecuteNonQuery();

            connection.Close();

        }

        [HttpGet]
        [Route("[action]")]
        public int Get()
        {
            using var connection = new SqlConnection("server=127.0.0.1;database=TEST;uid=sa;pwd=Sam008125;Connection Timeout=3000");

            connection.Open();

            var command = new SqlCommand();

            command.Connection = connection;

            command.CommandText = @"SELECT * FROM Click_Counter";

            var reader = command.ExecuteReader();

            int num = 0;

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    num = (int)reader.GetDecimal(1);
                    break;
                }
            }

            reader.Close();

            return num;

        }
    }
}
