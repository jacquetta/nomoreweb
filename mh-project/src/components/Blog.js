import React from 'react';
import { Card } from 'react-bootstrap';

function Blog() {
    return (
      <div>
        <h2>Blog</h2>
        <Card style={{ width: '25rem'}}>
            <Card.Body>
                <Card.Title>Why this?</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">April 30, 2019</Card.Subtitle>
                <Card.Text>
                    This project was actually created for Pioneer a contest that I
                    was participating in. As I was struggling to find a topic of
                    interest I came across the categories and bam it hit me mental
                    health. Something that I struggle with everyday. I wanted to
                    create a website that is for minorities find more information and
                    get help for mental illness.
                </Card.Text>
            </Card.Body>
        </Card>
      </div>
    );
}

export default Blog;