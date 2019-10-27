// 
// Important
//

// import TireList.css from assets/css before important
//
// Search getListStyle to change the y coordinates of the draggables
//
 



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// import "./index.css"
//import "../../assets/css/TierList.css"
import "assets/css/TierList.css"

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
    // width: "100%",
    display: "flex",
    position: "absolute",
    left: 120
    
});

const getListStyle2 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    position: "absolute",
    left: 120,
    top: 130,
    // width: "100%",
    display: "flex",
    // marginTop: "10vh",
});

const getListStyle3 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    // width: "100%",
    display: "flex",
    // marginTop: "10vh",
    position: "absolute",
    left: 120,
    top: 260,
});

const getListStyle4 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    // width: "100%",
    display: "flex",
    // marginTop: "10vh",
    position: "absolute",
    left: 120,
    top: 390,
});

const getListStyle5 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    // width: "100%",
    display: "flex",
    // marginTop: "10vh",
    position: "absolute",
    left: 120,
    top: 520,
});


class App extends Component {
    state = {
        items: getItems(6,0),
        selected: getItems(4,6),
        d3: getItems(3,10),
        d4: getItems(2,13),
        d5: getItems(1,15),
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected',
        droppable3: 'd3',
        droppable4: 'd4',
        droppable5: 'd5'
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
                state = { items: items };
            }

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
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
                    items: result.droppable,
                })
            }
            
            if (source.droppableId === 'droppable2' || destination.droppableId == "droppable2") {
                this.setState({
                    selected: result.droppable2,
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

            // this.setState({
            //     items: result.droppable,
            //     selected: result.droppable2,
            //     d3: result.droppable3,
            //     d4: result.droppable4,
            //     d5: result.droppable5
            // });
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <div>
                


            <DragDropContext onDragEnd={this.onDragEnd}>
                <div>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {this.state.items.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
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
                            {this.state.selected.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
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
                                        draggableId={item.id}
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
                                        draggableId={item.id}
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
                                        draggableId={item.id}
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
            
            <div class="color-box1" style={{backgroundColor: "#FF850A"}}></div>
            <div class="color-box2" style={{backgroundColor: "#FF850A"}}></div>
            <div class="color-box3" style={{backgroundColor: "#FF850A"}}></div>
            <div class="color-box4" style={{backgroundColor: "#FF850A"}}></div>
            <div class="color-box5" style={{backgroundColor: "#FF850A"}}></div>
            </div>
        );
    }
}

// export default 
// Put the things into the DOM!
ReactDOM.render(<App />, document.getElementById('root'));
