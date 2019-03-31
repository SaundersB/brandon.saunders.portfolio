import React from 'react';
import {ListGroup} from 'react-bootstrap';

class CustomListGroupItem extends React.Component {

    render()
    {
        return (
              <ListGroup.Item>
                  <div className="row">
                      <div className="col-5">
                          {this.props.header}:
                      </div>
                      <div className="col-7">
                          {this.props.value}
                      </div>
                  </div>
              </ListGroup.Item>
        );
    }
}

export default CustomListGroupItem;
