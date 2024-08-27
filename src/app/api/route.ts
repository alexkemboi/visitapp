"use server"
import ConnectMysql from "./mysql";
export default async function getdata(tablename:any) {
    try{
      const [rows] = await (await ConnectMysql()).promise().query(`SELECT * FROM ${tablename}`);
          console.log("server",rows);
          console.log("tablename",tablename);
          return {
              props: {
                data: rows
              }
            };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
          props: {
            error: 'Failed to fetch data'
          }
        };
      }
    
  }
