import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import BAButton from "../components/BAButton";
import { useState } from "react";

export default function Quiz() {

    const [questions, setQuestions] = useState([
        {
            question: 'HTML stands for ________',
            options: ['HyperText Markup Language', 'Hyperlink Markup Language', 'Hyper Text Modul Language', 'Hyperlink Markup Language'],
            correctAnswer: 'HyperText Markup Language'
        },
        {
            question: 'Which tag is used to create a hyperlink?',
            options: ['<a>', '<img>', '<dl>', '<link>'],
            correctAnswer: '<a>'
        },
        {
            question: 'Which of the following table tags is used to create a table row?',
            options: ['<th>', '<td>', '<tr>', '<table>'],
            correctAnswer: '<tr>'
        },
        {
            question: 'Which tag is used to make a text bold?',
            options: ['<strong>', '<bold>', '<b>', '<em>'],
            correctAnswer: '<strong>'
        },
        {
            question: 'Which HTML tag is used to create a horizontal rule (a thematic break)?',
            options: ['<hr>', '<br>', '<line>', '<divider>'],
            correctAnswer: '<br>'
        },
    ])
    const [currentIndex, setCurrentIndex] = useState(0)


    return <>
        <Box className='bg-slate-200 h-screen p-2'>
            <Container>
                <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                        <Paper className="p-10">
                            <Typography>Question</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className='p-4'>
                            <BAButton label='Option' />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className='p-4'>
                            <BAButton label='Option' />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className='p-4'>
                            <BAButton label='Option' />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Box className='p-4'>
                            <BAButton label='Option' />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    </>
}