var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div className={"page hoopage " + this.props.position}>
              
                <div className="content hhr" style={{backgroundColor: '#00A3B5'}}> 
                    <ul  className="table-view medi-cen">
                        <li className="table-view-cell media" style={{backgroundColor: '#fff',color: '#333',margin:'15px'}}><a href="#page1">Emergency</a></li>
                        <li className="table-view-cell media" style={{backgroundColor: '#fff',color: '#333',margin:'15px'}}><a href="#page2">Non Emergency</a></li>                        
                    </ul>

                </div>
            </div>
        );
    }
});



var Page1 = React.createClass({
    render: function () {      
        return (
            <div className={"page page1 " + this.props.position}>
                <Header text="HEART" back="true"/>
                <div className="content">
                <h4 className="padh" style={{backgroundColor: '#fff'}}>Patient Details</h4>
                    <div className="card">
                    <p>Patient Name</p>  
                    <input type = "text"/>
                  
                     <p>Patient Age</p>  
                    <input type = "text"/>
                   
                     <p>Patient Gender</p>  
                    <input type = "text"/>
                    
                    <p>Patient Mobile Number</p>  
                    <input type = "text"/>
                   
                    <ul  className="table-view">
                      
                    <li className="table-view-cell media"><a href="#page33">Submit</a></li>
                    
                    </ul>
                    </div>


                </div>



             
            </div>
        );
    }
});

var Page2 = React.createClass({
    render: function () {
        return (
            <div className={"page page2 " + this.props.position}>
                <Header text="Non Emergency" back="true"/>
                <div className="content">
                 
                </div>
            </div>
        );
    }
});

var Page33 = React.createClass({
    render: function () {
        return (
            <div className={"page page33 " + this.props.position}>
                <Header text="Page 33" back="true"/>
                <div className="content">
                  
                   <h1>report submitted successfully</h1>

                </div>
            </div>
        );
    }
});

var App = React.createClass({
    mixins: [PageSlider],
    componentDidMount: function() {
        router.addRoute('', function() {
            this.slidePage(<HomePage key="HomePage"/>);
        }.bind(this));
        router.addRoute('page1', function() {
            this.slidePage(<Page1 key="page1"/>);
        }.bind(this));
        router.addRoute('page2', function() {
            this.slidePage(<Page2 key="page2"/>);
        }.bind(this));
             router.addRoute('page33', function() {
            this.slidePage(<Page33 key="page33"/>);
        }.bind(this));
        router.start();
    }
});

React.render(<App/>, document.body);