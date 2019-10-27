import React from "react"
import Navbar from "./Navbar.js";
import Footer from './Footer.js';
import "assets/css/TierList.css"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ShopComponent from "./ShopComponent.js";
// import firebase from "firebase"

// const config = {
//     apiKey: "AIzaSyAS5cXTp5z0_Dj4BcgCicQ7ptfUISaPdSE",
//     authDomain: "boba-meta.firebaseapp.com",
//     databaseURL: "https://boba-meta.firebaseio.com",
//     projectId: "boba-meta",
//     storageBucket: "boba-meta.appspot.com",
//     messagingSenderId: "155954178622",
//     appId: "1:155954178622:web:c226c1657d2fa3a03f7f6f",
//     measurementId: "G-KPWDH4SWGP"
// }

// firebase.initializeApp(config)
// var db = firebase.firestore()
// var shopIds = db.collection("shopIds");

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 4,
    // margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: "100%",
    height: "100px",
    display: "flex",
    position: "absolute",
    top: 80,
    left: 120
    
});

const getListStyle2 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    position: "absolute",
    left: 120,
    top: 180,
    width: "100%",
    height: "100px",
    display: "flex",
    // marginTop: "10vh",
});

const getListStyle3 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: "100%",
    height: "100px",
    display: "flex",
    // marginTop: "10vh",
    position: "absolute",
    left: 120,
    top: 280,
});

const getListStyle4 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: "100%",
    height: "100px",
    display: "flex",
    // marginTop: "10vh",
    position: "absolute",
    left: 120,
    top: 380,
});

const getListStyle5 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: "100%",
    height: "100px",
    display: "flex",
    // marginTop: "10vh",
    position: "absolute",
    left: 120,
    top: 480,
});
const getListStyle6 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    // width: "100%",
    display: "flex",
    // marginTop: "10vh",
    position: "absolute",
    left: 0,
    top: 592,
});

class MakeTierListView extends React.Component {
    constructor(props) {
        super(props)
        this.shops = this.props.shops
        console.log("this.shops")
        console.log(this.shops)
        var shopComponents = []
        for (var i=0; i < this.shops.length; i++) {
            var shopComponent = <ShopComponent id={this.shops[i].id}
                name={this.shops[i].name}
                img={this.shops[i].image_url} />
            shopComponents.push(shopComponent)
        }
        // console.log("shopComponents arr")
        // console.log(shopComponents)

        this.state = {
            // d1: getItems(1, 0),
            // d2: getItems(1, 1),
            // d3: getItems(1, 2),
            // d4: getItems(1, 3),
            // d5: getItems(1, 4),
            d1: [],
            d2: [],
            d3: [],
            d4: [],
            d5: [],
            d6: shopComponents
        };
        this.writeToDB = this.writeToDB.bind(this)
    }

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'd1',
        droppable2: 'd2',
        droppable3: 'd3',
        droppable4: 'd4',
        droppable5: 'd5',
        droppable6: 'd6'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };
            if (source.droppableId === 'droppable1') {
                state = { d1: items };
            }

            if (source.droppableId === 'droppable2') {
                state = { d2: items };
            }

            if (source.droppableId === 'droppable3') {
                state = { d3: items };
            }
            if (source.droppableId === 'droppable4') {
                state = { d4: items };
            }
            if (source.droppableId === 'droppable5') {
                state = { d5: items };
            }
            if (source.droppableId === 'droppable6') {
                state = { d6: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            if (source.droppableId === 'droppable' || destination.droppableId == "droppable") {
                this.setState({
                    d1: result.droppable,
                })
            }
            
            if (source.droppableId === 'droppable2' || destination.droppableId == "droppable2") {
                this.setState({
                    d2: result.droppable2,
                })
            }

            if (source.droppableId === 'droppable3' || destination.droppableId == "droppable3") {
                this.setState({
                    d3: result.droppable3,
                })
            }
            if (source.droppableId === 'droppable4' || destination.droppableId == "droppable4") {
                this.setState({
                    d4: result.droppable4,
                })
            }
            if (source.droppableId === 'droppable5' || destination.droppableId == "droppable5") {
                this.setState({
                    d5: result.droppable5,
                })
            }
            if (source.droppableId === 'droppable6' || destination.droppableId == "droppable6") {
                this.setState({
                    d6: result.droppable6,
                })
            }
        }
    };

    writeToDB() {
        console.log(this.state)
        var rowName = [this.state.d1, this.state.d2, this.state.d3, this.state.d4, this.state.d5]
        var batch = this.props.db.batch()
        for (var row=0; row < 5; row++) {
            var curr = [...rowName[row]]
            for (var i=0; i < curr.length; i++) {
                var propsId = curr[i].props.id
                var docRef = this.props.shopIds.doc(propsId)
                batch.set(docRef, {
                    score: 4 - row,
                    numVotes: 1
                })
            }
        }
        batch.commit().then(function () {
            console.log("batch committed")
        });
    }

    render() {
        return (
            <>
                <Navbar />
                <main ref="main">
                <div className="position-relative">
                    <section className="section section-lg section-hero section-shaped">
                        <div className="shape shape-style-1 shape-default" style={{height: 80}} />  
                        <DragDropContext onDragEnd={this.onDragEnd}>
                <div style={{height: "80vh"}}>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {this.state.d1.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.props.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    </div>
                    <div>
                <Droppable droppableId="droppable2" direction="horizontal">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle2(snapshot.isDraggingOver)}>
                            {this.state.d2.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.props.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                </div>
                <Droppable droppableId="droppable3" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle3(snapshot.isDraggingOver)}>
                                {this.state.d3.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.props.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId="droppable4" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle4(snapshot.isDraggingOver)}>
                                {this.state.d4.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.props.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId="droppable5" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle5(snapshot.isDraggingOver)}>
                                {this.state.d5.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.props.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="droppable6" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle6(snapshot.isDraggingOver)}>
                                {this.state.d6.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.props.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
            </DragDropContext>
            {/* <button onClick={() => this.writeToDB()}>HIIIIIIII</button> */}
            
            <div class="color-box1" style={{backgroundColor: "#FF850A"}}></div>
            <div class="color-box2" style={{backgroundColor: "#FF850A"}}></div>
            <div class="color-box3" style={{backgroundColor: "#FF850A"}}></div>
            <div class="color-box4" style={{backgroundColor: "#FF850A"}}></div>
            <div class="color-box5" style={{backgroundColor: "#FF850A"}}></div>
                    </section>
                </div>
                <Footer link="/thanks" progress = '100' complete={this.writeToDB}/>
                </main>
            </>
        )
    }
}

export default MakeTierListView