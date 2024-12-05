// src/components/CourseDetails.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CourseImage from '../course-image.jpg'; // Add your image here

const CourseDetails = () => {
  return (
    <Box sx={{ py: 8 }} id="course-details">
      <Container maxWidth="md">
        {/* Image */}
        {/* <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img
            alt="Python Bootcamp"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box> */}

        <Typography variant="h4" align="center" gutterBottom>
          Python Bootcamp Course Details
        </Typography>

        {/* Course Description */}
        <Typography variant="body1" paragraph>
          Learn Python through a very practical hands-on approach in this
          <strong> 45-hour Coding Bootcamp</strong>. This course teaches how to develop enterprise applications using Python, one of the most popular programming languages and in high demand by the job market.
        </Typography>
        <Typography variant="body1" paragraph>
          This unit is delivered in the form of a Bootcamp and embraces the core philosophy to deliver the most valuable and practical content in the least amount of time. Through a number of hands-on practical projects, learners will be able to learn from scratch how to develop enterprise applications using Python. By the end of the unit, the learner should have the necessary skills to find a job as an enterprise Python developer.
        </Typography>
        <Typography variant="body1" paragraph>
          The Bootcamp is delivered in a very practical approach. Each learning outcome is delivered in the form of a mini-project. The theory and concepts are taught while the learners are building these mini-projects together in the class. At the end of the Bootcamp, the learners are expected to build a project using all the concepts and techniques used in the previous mini-projects.
        </Typography>
        <Typography variant="body1" paragraph>
          This unit assumes learners are already familiar with programming concepts and is designed for learners who have completed the Foundations of Programming short course or who have equivalent experience.
        </Typography>

        {/* Course Price */}
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Course Price
          </Typography>
          <Typography variant="h3" color="primary" gutterBottom>
            £750
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/enroll"
            sx={{ mt: 2 }}
          >
            Enroll Now
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Learning Outcomes */}
        <Typography variant="h5" gutterBottom>
          Learning Outcomes
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="LO1: Develop console Python applications using core Python syntax and common Python modules." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="LO2: Develop REST API Services." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="LO3: Build Database applications." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="LO4: Develop a full-stack web application." />
          </ListItem>
        </List>

        {/* Applied Knowledge */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Applied Knowledge
        </Typography>
        <List>
          {[
            'Develop Python console applications.',
            'Design the business logic layer of a Python application.',
            'Design the model and storage layer of a Python application.',
            'Apply object-oriented techniques to create applications that reuse or extend existing code.',
            'Show data in a database as easy, understandable information in an application.',
            'Read, save, and manipulate data in databases, flat files, and other formats using a Python application.',
            'Apply the most suitable Python module to solve a software problem.',
            'Use modern web frameworks to implement web applications.',
          ].map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default CourseDetails;
