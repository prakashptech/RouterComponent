import React from 'react';
class Child extends React.Component {
    handleProps = () => {
        console.log(this.props);
    };
        render () {
                return (
                    <div>
                    
            {this.props.attr1}
            {this.props.attr2}
            {this.props.attr3}
        
          <button onClick={this.handleProps}>Props</button>
                        
                    </div>
                )
        }
}
export default Child;