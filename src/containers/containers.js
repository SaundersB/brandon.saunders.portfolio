import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Navigation = styled.div`
  width: 220px;
  flex-shrink: 0;
  background: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
`;
export const Body = styled.div`
  padding: 12px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const NavigationContainer = styled(Navigation)`
  margin-right: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);  
`;

export const BodyContainer = styled.div`  
  background: #fff;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
