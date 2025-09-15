import { useState } from "react";
import orderCover from "../../assets/banner/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import BykeCard from "../../components/BykeCard/BykeCard";

const Order = () => {
    const [ tabIndex, setTabIndex ] = useState(0);
    const [ menu ] = useMenu();
    const cbr = menu.filter(item => item.category === "CBR");
    const yamaha = menu.filter(item => item.category === "YAMAHA");
    const suzuki = menu.filter(item => item.category === "SUZUKI");
    const kawasaki = menu.filter(item => item.category === "KAWASAKI");

  return (
    <div>
      <Cover img={orderCover} title="Order Byke"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>CBR</Tab>
          <Tab>YAMAHA</Tab>
          <Tab>SUZUKI</Tab>
          <Tab>KAWASAKI</Tab>
        </TabList>

        <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    cbr.map(item => <BykeCard
                        key={item._id}
                        item={item}
                    ></BykeCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
              {
                yamaha.map(item => <BykeCard
                key={item._id}
                item={item}
                ></BykeCard>)
              }
            </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
              {
                suzuki.map(item => <BykeCard
                key={item._id}
                item={item}
                ></BykeCard>)
              }
            </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
              {
                kawasaki.map(item => <BykeCard
                key={item._id}
                item={item}
                ></BykeCard>)
              }
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
