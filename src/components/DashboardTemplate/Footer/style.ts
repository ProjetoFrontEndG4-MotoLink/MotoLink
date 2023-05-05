import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 256px;
  background-color: var(--grey-1);
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer__column1 {
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      align-self: center;
      width: 114px;
      height: auto;
    }

    .container__infosDevs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3px;

      p {
        font-size: 12px;
        font-weight: var(--weight-4);
        color: var(--grey-2);
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .infosDevs__name {
          font-size: 12px;
          font-weight: var(--weight-3);

          color: var(--grey-2);
        }

        span {
          display: none;
        }
      }
    }
  }

  .footer__column2 {
    margin-top: 20px;
    font-size: 12px;

    font-weight: 600;

    color: var(--grey-2);
  }

  @media (min-width: 1024px) {
    height: fit-content;
    padding: 20px 0px;

    flex-direction: row;
    justify-content: space-between;

    .container__footer {
      max-width: 1180px;
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .footer__column1 {
      img {
        align-self: flex-start;
      }

      .container__infosDevs {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        div {
          flex-direction: row;

          .infosDevs__name:hover {
            color: var(--whiteFixed);
          }

          span {
            display: block;
            margin: 0 5px;

            font-size: 12px;
            font-size: var(--weight-3);

            color: var(--grey-2);
          }
        }
      }
    }
  }
`;
