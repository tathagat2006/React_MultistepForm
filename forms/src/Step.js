import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Step.css'

class Step extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curr_step_pos : 0,
        };
    }

    nextPage = () => {
        const {curr_step_pos} = this.state;
        if(curr_step_pos === this.props.data.length-1){
        this.setState({
                curr_step_pos:curr_step_pos
            })

        }else{
            this.setState({
                curr_step_pos:curr_step_pos +1
            })
        }
    }

    prevPage = () => {
        const {curr_step_pos} = this.state;
        if(curr_step_pos === 0){
            this.setState({
                curr_step_pos:curr_step_pos
            })

        }else{
            this.setState({
                curr_step_pos:curr_step_pos - 1
            })
        }
    }


    render() {
        const {data = {}} = this.props;
        const {curr_step_pos} = this.state;

        const step = data.length > curr_step_pos ? data[curr_step_pos] : {}

        const {title = ""} = step;
        return(<div>
            <Card style={{margin:"20px"}} className="step-card">
                <CardContent>
                    <Typography  color="textSecondary">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button disabled={curr_step_pos==0} size="small" color="primary" onClick = {this.prevPage}>
                        Prev
                    </Button>
                    <Button variant="contained" size="small" color="primary" onClick = {this.nextPage}>
                        Next
                    </Button>

                </CardActions>
            </Card>
        </div>
        )
    }
}

export default Step