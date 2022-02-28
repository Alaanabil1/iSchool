function Todate( Date_value , D_Value , M_Value , Y_Value)
          {
            var Year = 0;

            if(Date_value != null)
            {
                var Start_Date = new Date( Date_value);
                if(Y_Value == null){Year = Number(Start_Date.getFullYear() )}else{Year = Y_Value}

                var Start_Date_Date = Number(Start_Date.getDate());
                var Start_Date_Month = Number(Start_Date.getMonth())+1;

            }
            else{
               if(Y_Value == null){Year = "2021"}else{Year = Y_Value}
                var Start_Date_Date = Number(D_Value);
                var Start_Date_Month = Number(M_Value);
            }
            var Start_Date_text = 0;

            var Start_Date_Check_1 = 0;
            var Start_Date_Check_2 = 0;

            if(Start_Date_Date >= 10){Start_Date_Check_1 = 1;}
            else{Start_Date_Check_1 = 0;}

            if(Start_Date_Month >= 10){Start_Date_Check_2 = 1;}
            else{Start_Date_Check_2 = 0;}

            if(Start_Date_Check_1 == 0 && Start_Date_Check_2 == 0){Start_Date_text = Year+"/0"+Start_Date_Month+"/"+"0"+Start_Date_Date ;}
            else if(Start_Date_Check_1 == 1 && Start_Date_Check_2 == 0){Start_Date_text = Year+"/0"+Start_Date_Month+"/"+Start_Date_Date;}
            else if(Start_Date_Check_1 == 0 && Start_Date_Check_2 == 1){Start_Date_text = Year+"/"+Start_Date_Month+"/"+"0"+Start_Date_Date ;}
            else if(Start_Date_Check_1 == 1 && Start_Date_Check_2 == 1){Start_Date_text = Year+"/"+Start_Date_Month+"/"+Start_Date_Date ;}

            var month_Check = Number(Start_Date_Month)-1 ;
            var day_return = new Date(Year  ,   month_Check.toString() , Start_Date_Date.toString()); 

            return [Start_Date_text , Start_Date_Date , Start_Date_Month , Number(day_return.getDay()) , Year];
          }  

          

function database_col_parse_add(database_col)
{
  var values = "(timestamp,";
  for(var index = 0 ; index < database_col.length-1 ; index ++)
  {
      values += database_col[index]+",";
  }
  values += database_col[database_col.length-1]+")";

  return values;

}