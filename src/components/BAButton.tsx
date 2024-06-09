import { Button } from "@mui/material"

export default function BAButton(props: any) {
    const { label, className, onClick } = props


    return <Button sx={{ textTransform: 'inherit' }} variant="contained" onClick={onClick} className={className}>{label}</Button>
}