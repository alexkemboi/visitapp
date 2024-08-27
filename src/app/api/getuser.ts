"use server"
import ConnectMysql from "./mysql";
export default async function getServerSideProps(credentials:any) {
    try{
      const [rows] = await (await ConnectMysql()).promise().query(`SELECT * FROM hosts WHERE Email = '${credentials.username}' AND PhoneNumber = '${credentials.password}'`);
          console.log("server",rows);
          console.log("credentials",credentials);
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
