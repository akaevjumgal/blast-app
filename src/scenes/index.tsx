import { History } from 'history';
import { Component } from 'react';

export interface SceneProps {
  history: History
}

class BaseScene extends Component<SceneProps> {

}

export default BaseScene