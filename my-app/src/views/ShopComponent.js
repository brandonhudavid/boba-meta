import React from "react"

export class ShopComponent extends React.Component {

    render() {
        console.log("iamge url")
        console.log(this.props.img)
        return (
            <div style={{width: "100px", height: "100px", margin: "0 auto"}}>     
                <img src={this.props.img} style={{width: "100px", height: "100px", objectFit: "cover"}} />
                <p style={{backgroundColor: "white", position: "absolute", textAlign: "center", bottom: "20px", left: "50px" }}>
                    {this.props.name}
                </p>
            </div>
        )
    }
}

export default ShopComponent