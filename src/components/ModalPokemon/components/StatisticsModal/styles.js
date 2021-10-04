import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 24px;

  position: relative;
  top: -80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  width: 16.88px;
  height: 18px;
  margin-right: 11.37px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-size: 18px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--neutral-700);

  margin-right: auto;
  padding-right: 11.37px;
`;

export const Value = styled.p`
  font-style: normal;
  font-size: 18px;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--neutral-700);
`;
