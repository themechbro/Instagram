import react, {Component} from 'react';

class Footer extends Component{
    static defaultProps={
        footerLinks:[
            'Meta', 
            'About',
            'Blog',
            'Jobs',
            'Help',
            'API',
            'Privacy',
            'Terms',
            'Meta Verified'
        ],
        copyright:'© 2024 Instagram form Meta'
    }

    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="container w-50">
              <h5>Quick Links</h5>
              <ul class="nav flex-row justify-content-between">
              {this.props.footerLinks.map(i=> <li class="nav-item mb-2 m-2"><a href="#" class="nav-link p-0 text-body-secondary">{i}</a></li>)}
                </ul>
                <p className=' mt-5 blockquote text-muted'>{this.props.copyright}</p>
            </div>
          </footer>
        )
    }
}

export default  Footer;