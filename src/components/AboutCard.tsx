import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export interface AboutCardProps {
  image: string,
  name: string,
  subtitle: string,
  description: string
}

export interface AboutCardState {

}

export class AboutCard extends Component<AboutCardProps, AboutCardState> {
  static displayName = AboutCard.name;

  render() {
    return (
      <div className="col-sm-3">
        <Card style={{ width: '18rem' }} className="mr-4 mb-4">
          <CardImg top width="100%" src={this.props.image} alt={this.props.name} />
          <CardBody>
            <CardTitle tag="h5">{this.props.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.subtitle}</CardSubtitle>
            <CardText>{this.props.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
