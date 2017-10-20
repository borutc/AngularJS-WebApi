using NPoco;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsWebApiForm_v4.webApi
{
    public class UserRepository
    {
        private string connectionString;
        public UserRepository()
        {
            connectionString = @"Data Source=(LocalDB)\v12.0;Initial Catalog=users;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        }

        public IDatabase Connection
        {
            get
            {
                return new Database(connectionString, DatabaseType.SqlServer2012, SqlClientFactory.Instance);
            }
        }

        public void addUser(User user)
        {
            using (IDatabase db = Connection)
            {
                db.Insert<User>(user);
            }

        }
    }
}
