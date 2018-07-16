import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'

import Course from './Course';

const SPACE_ID = '[INSERT CONTENTFUL SPACE ID]';
const ACCESS_TOKEN = '[INSERT CONTENTFUL ACCESS TOKEN]';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});


class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            course: [],
            searchString: ''
        };
        this.getCourse = this.getCourse.bind(this);
        this.onSearchInputChange = this.onSearchInputChange.bind(this)
    }
    getCourse() {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((res) => {
            this.setState({course: res.items})
            console.log(this.state.course)
        })
        .catch((err) => {
            console.log('Error occured fetching');
            console.error(err)
        })
    }
    onSearchInputChange(e) {
        console.log(e.target.value);
        if(e.target.value) {
            this.setState({searchString: e.target.value})
        } else {
            this.setState({searchString: ''})
        };
        this.getCourse()
    }

    render() {
        return (
            <div>
                {this.state.course ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id='search input'
                            placeholder='Search for course'
                            margin='normal'
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.course.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : 'no course found'}
            </div>
        );
    }
}

export default CourseList;
