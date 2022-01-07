import styled from "styled-components";
import { Tabs, TabList, Tab,TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%
margin-top: 16px;
`;

export const WrapperTabList = styled.div(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin: 0;
`;
WrapperTabList.tabsRole = "Tablist";

export const WrapperTab = styled.div(Tab)`
border-radius: 16px;
border: 1px solid #ccc;
padding: 16px;
user-select: none;
cursor: pointer;
z-index: 99999;
background-color: "#fff";
margin: 8px;

&:focus{
    outline: none;   
}

&.is-selected{
box-shadow: 3px spx 10px rgba(0, 0, 0, 0.2);
}
`;
WrapperTabList.tabsRole = "Tab";

export const WrapperTabPanel = styled.div(TabPanel)`
padding: 16px;
border: 1px solid "#ccc";
display: none;
margin-top: -5px;

&.is-selected{
 display: block;
}
`;
WrapperTabList.tabsRole = "TabPanel";

export const WarpperList = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap:
`;