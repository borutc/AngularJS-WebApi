using Newtonsoft.Json;
using NPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsWebApiForm_v4.webApi
{

    [TableName("Table")]
    [PrimaryKey("Id")]
    public class User
    {
        [Column("firstName")]
        public string FirstName { get; set; }

        [Column("lastName")]
        public string LastName { get; set; }

        [Column("address")]
        public string Address { get; set; }

        [Column("birthday")]
        public DateTime Birthday { get; set; }

        [Column("created")]
        public string Created { get; set; }
    }
}
