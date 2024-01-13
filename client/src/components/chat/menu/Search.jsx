
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase, Box, styled } from "@mui/material";

const Conponent = styled(Box)`
    background: #fff;
    heidght: 45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;
`;

const InputField = styled(InputBase) `
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 14px;
    height: 15px;
    width: 100%;
`;

const Search = () => {
    return (
        <Conponent>
            <Wrapper>
                <Icon>
                    <SearchIcon 
                        font-size="small"
                    />
                </Icon>
                <InputField
                    placeholder='Search or start new chat'
                />
            </Wrapper>
        </Conponent>
    )
}

export default Search;