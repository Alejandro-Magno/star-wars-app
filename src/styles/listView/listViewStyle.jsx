import styled from "styled-components";

const ListaView = styled.div`
  background-color: #000000;
  height: auto;

  color: white;

  .container {
    position: relative;
    //background-color: #3d3d3d44;
    //background-color: #464646;
    //margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    // justify-content: space-around;

    .Movie--container {
      // background-color: #bdbdbd;
      width: 70vw;
      display: grid;
      gap: 20px;

      padding: 1%;
      justify-content: center;
      // grid-template-columns: repeat(3, 1fr);

      .Movie {
        background-color: #bdbdbd;
        max-height: 500px;
        cursor: pointer;
        aspect-ratio: 16/9;
        overflow-y: auto;
        position: relative;

        ::-webkit-scrollbar {
          display: none;
        }

        :hover {
          transform: scale(1.01);

          h3 {
            color: #e6e6e6;
          }
        }
      }
    }
  }

  .Header {
    margin-bottom: 10%;
    padding-top: 100px;
    width: 70vw;
  }

  .list {
    display: inline-flex;
    list-style: none;

    gap: 6px;
    padding-top: 10px;
    padding-left: 10px;
    font-family: OCRS;
    color: #27c0d9;
    height: 80px;
    word-break: keep-all;

    li {
      cursor: pointer;
      font-size: calc(1em +2vmax);
    }
  }
  .Membrete {
    position: sticky;
    top: 0;
    display: flex;
    background-color: #2c2c2c;
    justify-content: space-between;
    h3 {
      color: #b9b9b9;
      padding: 10px;
    }
  }

  .details {
    color: #303030;
    // font-family: OCRS;
    font-weight: normal;
    padding: 10px;
    //font-size: calc(1em +2vmax);

    p {
      letter-spacing: 2px;
    }
  }

  .details--director {
    display: flex;
    justify-content: end;
    text-transform: uppercase;
    letter-spacing: 2px;
    //white-space: nowrap;
    span {
      border-bottom: 3px solid #a8a6a6;
      letter-spacing: 4px;
      //padding: 3px;
    }
  }
  .details-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    word-wrap: break-word;
  }

  .details-body {
    margin-top: 10%;
    h4 {
      padding-top: 20px;
      margin-bottom: 10px;
      letter-spacing: 3px;
    }
    p {
      font-weight: 500;
      line-height: 30px;
      border-left: 3px solid #838383;
      padding: 10px;
    }
  }
`;


export const DetailView = styled.div`
  background-color: #000000;
  height: auto;

  color: white;

  .container {
    z-index: 1;
    position: relative;
    //background-color: #3d3d3d44;
    //background-color: #464646;
    //margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    // justify-content: space-around;
  }

  .Header {
    margin-bottom: 5%;
    padding-top: 100px;
    width: 60vw;
  }

  .headers--titles {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
  .header--content {
    h3 {
      margin-bottom: 10px;
      letter-spacing: 3px;
    }

    p {
      letter-spacing: 3px;
      text-size-adjust:100%;
    }
  }

  .Table--container {
    width: 60vw;
    h2 {
      color: #ddd;
    }
    color: black;
    font-weight: 500;
  }

  table {
    background-color: white;
    text-align: left;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 130px;
  }

  th,
  td {
    padding: 20px;
  }

  thead {
    background-color: #246355;
    border-bottom: solid 5px #0f362d;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #ddd;
  }

  tr:hover td {
    background-color: #369681;
    color: white;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    table td::before {
      /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }

  footer {
    width: 60vw;

  
  }
`;


export const Grafico = styled.div`
display: flex;
justify-content: center;
align-content: center;

background-color: #dddddd;

margin-bottom: 130px;



.App{
 // aspect-ratio: 1/1;
  width: 100%;
  height: 100%;

}



`
export default ListaView;
