import { ChoiceList, EmptyState, Layout, Page, Button, Banner, Frame, Loading, 
  SkeletonPage, Card, SkeletonBodyText, TextContainer, SkeletonDisplayText,DataTable,
  Select, SkeletonThumbnail
  } from '@shopify/polaris';
import store from 'store-js'

/*
const {
  USERNAME,
  PASSWORD,  
} = process.env;

const puppeteer = require('puppeteer');
const C = require('../data/constants');
const USERNAME_SELECTOR = '#id_signin_form > dl > dd:nth-child(2) > input[type=email]';
const PASSWORD_SELECTOR = '#id_signin_form > dl > dd:nth-child(4) > input[type=password]';
const CTA_SELECTOR = '#id_signin_form > div > input';


async function startBrowser() {
  const browser = await puppeteer.launch({    
    ignoreHTTPSErrors: true, 
    args: [
      '--proxy-server= 164.68.117.9:8080',
      '--no-sandbox',
      '--disable-setuid-sandbox',]
  });    
  const page = (await browser.pages())[0];  
  return {browser, page};
}

async function closeBrowser(browser) {
  return browser.close();
}
let scrape = async () => {
  const {browser, page} = await startBrowser();
  
  page.setViewport({width: 1366, height: 768});    
  await page.goto(C.loginUrl);  
  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(USERNAME);
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(PASSWORD);
  await page.click(CTA_SELECTOR);
  console.log('-- browser opened --');
  await page.goto(C.firstPageUrl, {waitUntil: 'domcontentloaded'});
  console.log('-- first URL opened --');

  let result = await page.evaluate(() => {
      let data=[];
      let elements = document.querySelectorAll('#product_list_st > ul > li > a'); // Select all Products      
      console.log(elements);
      for(i = 0 ; i < elements.length; i ++){
        data.push(elements[i]['href']);
      }      
      return data; // Return our data array
  });

  closeBrowser(browser);  
  return result; // Return the data
};
*/
class Index extends React.Component {
  constructor(props){
    super(props);
    
    // scrape().then((value) => {
    //   console.log(value); // Success!
    // });
  }  
  state = {
    selected: 'today',
  };
  handleChange = (newValue) => {
    this.setState({selected: newValue});
  };
  render() {    
    const options = [
      {label: 'Item1', value: 'Item1'},
      {label: 'Item2', value: 'Item2'},
      {label: 'Item3', value: 'Item3'},
    ];

    return (
      <SkeletonPage title="OrangeShine" primaryAction secondaryActions={2}>  
        <Layout>
          <Layout.Section>
            <Card sectioned>           
              <Select
                label="Brands"
                options={options}
                onChange={this.handleChange}
                value={this.state.selected}
              />     
            </Card>
            <Card sectioned title="Description">
              <SkeletonBodyText />
            </Card>
            <Card sectioned title="Variant (Size)">
              <SkeletonBodyText />
            </Card>
            <Card sectioned title="Variant (Color)">
              <SkeletonBodyText />
            </Card>
            <Card sectioned title="Images">
              <SkeletonThumbnail size="large" />
            </Card>            
          </Layout.Section>
          <Layout.Section secondary>
            <Card sectioned>
              <Select
                label="Date range"
                options={options}
                onChange={this.handleChange}
                value={this.state.selected}
              />                    
              </Card>
              <Card sectioned title="Title">
                <SkeletonBodyText lines={1} />
              </Card>
              <Card sectioned title="SKU">
                <SkeletonBodyText lines={1} />
              </Card>
              <Card sectioned title="Price">
                <SkeletonBodyText lines={1}/>
              </Card>
              <Card sectioned title="Vendor">
                <SkeletonBodyText lines={1}/>
              </Card>
              <Card sectioned title="Product Type">
                <SkeletonBodyText lines={1}/>
              </Card>
              <Card sectioned title="">
                <Card.Section>
                  <SkeletonBodyText lines={1} />
                </Card.Section>
                <Card.Section>
                  <Button primary>Add Product</Button>
                </Card.Section>
              </Card>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    );
  }  
}

export default Index;

