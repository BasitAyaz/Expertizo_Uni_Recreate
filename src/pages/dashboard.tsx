import { Box, Grid } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";

export default function Dashboard() {
    return <>
        <Box>
            <Grid container>
                <Grid item md={3}>
                    <Link to="/dashboard/pg1">Page 1</Link>
                    <Link to="/dashboard/pg2">Page 2</Link>
                    <Link to="/dashboard/pg3">Page 3</Link>
                </Grid>
                <Grid item md={9}>
                    <Routes>
                        <Route path="pg1" element={<PG1 />} />
                        <Route path="pg2" element={<PG2 />} />
                        <Route path="pg3" element={<PG3 />} />
                    </Routes>
                </Grid>
            </Grid>
        </Box>
    </>
}

function PG1() {
    return <>
        <h1>Page 1</h1>
    </>
}
function PG2() {
    return <>
        <h1>Page 2</h1>
    </>
}
function PG3() {
    return <>
        <h1>Page 3</h1>
    </>
}