import styled from "styled-components";

export const UserDashboardMotoboy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    h1 {
    text-align: center;
  }

  .UserInfoDetails {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .UserInfoDetails--name {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  

  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 20px;

    h1 {
      text-align: left;
    }

    .UserInfoDetails {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    .UserInfoDetails--name {
        width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`