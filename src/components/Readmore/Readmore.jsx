import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Readmore/Readmore.css'; // Adjust the path if necessary

const ReadMore = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  return (
    <div className="read-more-container">
      <h1 className="post-title">{post.title}</h1>
      <img className="post-image" src={post.image} alt={post.title} />
      <p className="post-content">{post.content}</p>
      <Link to="/blog" className="back-button">Back to Blog</Link>
    </div>
  );
};

const blogPosts = [
  {
    title: "What Are The Different Fridge Heights?",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/05/iStock-1392897495-1-400x222.jpg",
    content: `Refrigerators come in various heights to accommodate different kitchen designs and needs. 
    The standard refrigerator height ranges from 60 inches to 72 inches, but there are models that are 
    shorter or taller. When selecting a fridge, consider the height of your kitchen cabinets and 
    counter space to ensure a seamless fit. Additionally, ensure there's enough clearance for ventilation 
    at the top. Taller models often have more storage space, but make sure you can reach the top shelves 
    comfortably. Consider side-by-side, top-freezer, and bottom-freezer models to find the best fit for your home.`
  },
  {
    title: "How To Install An Over The Range Microwave",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/03/iStock-1151620512-400x307.jpg",
    content: `Installing an over-the-range microwave can enhance your kitchen's functionality and style. 
    First, ensure you have the necessary tools: a drill, screwdriver, level, and measuring tape. Begin by 
    removing your old microwave, if applicable, and ensuring the area is clean. Measure the height for the new 
    microwave, making sure it is installed 18 inches above the cooktop for optimal functionality. Attach 
    the mounting bracket to the wall, making sure it's level. Then, lift the microwave into place, securing 
    it to both the wall and the cabinet above. Don't forget to connect the power supply and test the microwave 
    before finishing the installation.`
  },
  {
    title: "5 Reasons You Should Repair Your Garbage Disposal",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/03/iStock-1424529047-400x267.jpg",
    content: `Repairing your garbage disposal can save you money and reduce waste. Here are five reasons 
    to consider: First, repairing is often cheaper than replacing a disposal. Second, many disposals can 
    last for years with proper care, making repairs a worthwhile investment. Third, fixing a disposal 
    is often quicker than shopping for a new one. Fourth, it minimizes waste, as fewer appliances end up in 
    landfills. Finally, a well-maintained disposal helps your kitchen function smoothly, making meal prep easier.`
  },
  {
    title: "Garbage Disposal Repair Tips",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/02/iStock-1398133058-400x272.jpg",
    content: `If your garbage disposal is not working, don't panic. Start by checking for a jam; turn off 
    the power, and use an allen wrench to manually turn the motor. Next, ensure the reset button has not 
    been tripped. If the unit hums but doesn't spin, it may need lubrication or could have a faulty motor. 
    Regular maintenance, like running cold water and avoiding fibrous foods, can prevent future issues. If 
    problems persist, consider calling a professional.`
  },
  {
    title: "Refrigerator Maintenance Tips",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2023/01/iStock-1399160717-400x286.jpg",
    content: `Maintaining your refrigerator is crucial for its longevity. Regularly clean the condenser coils 
    every six months to improve efficiency. Check door seals for gaps that may cause cold air to escape; 
    replace if necessary. Monitor the temperature, keeping it at 37°F for the fridge and 0°F for the freezer. 
    Additionally, declutter your fridge, discarding expired items to ensure airflow. Performing these simple 
    tasks can help your refrigerator run smoothly for years.`
  },
  {
    title: "Common Oven Issues",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2022/12/iStock-1216122354-400x267.jpg",
    content: `Oven problems can range from uneven cooking to temperature inaccuracies. Common issues include 
    a faulty thermostat, which can lead to inconsistent temperatures, and a malfunctioning igniter, which 
    may prevent gas from igniting. If your oven doesn't heat, check the power supply and ensure the door 
    seals properly. Cleaning the oven can also solve many issues, as grease buildup can affect performance. 
    Regular maintenance can help prevent these common problems.`
  },
  {
    title: "Dishwasher Repair Guide",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2022/12/iStock-1355251759-400x300.jpg",
    content: `Dishwashers are convenient appliances that require minimal maintenance. However, when they fail, 
    it can be frustrating. Common problems include water not draining, dishes not cleaning properly, or the 
    machine not turning on. Start by checking the filter and drain for clogs. Ensure the spray arms are 
    free from debris, and inspect the door latch. If the machine still doesn't operate, it may be an issue 
    with the power supply or control panel. Regularly cleaning your dishwasher can help prevent many issues.`
  },
  {
    title: "Microwave Safety Tips",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2022/09/iStock-1175495774-400x267.jpg",
    content: `Microwave ovens are convenient but require safety precautions. Always use microwave-safe containers; 
    avoid metal and aluminum foil, which can spark. Regularly clean the microwave to prevent food buildup, 
    which can cause smoke and odors. Never operate the microwave empty, as this can damage the appliance. 
    Finally, be cautious when removing food, as steam can build up in containers. Following these tips can 
    ensure safe usage of your microwave.`
  },
  {
    title: "Laundry Machine Maintenance",
    image: "https://www.appliancerepair512.com/wp-content/uploads/2022/09/iStock-1314435125-400x266.jpg",
    content: `Laundry machines can last for years with proper maintenance. Start by regularly checking hoses for 
    leaks or cracks; replace them every five years to prevent flooding. Clean the lint trap after every use to 
    ensure proper airflow and efficiency. Use the right detergent and avoid overloading the machine, which can 
    lead to damage. Periodically run a maintenance wash with hot water and vinegar to clean out any buildup. 
    Proper care will keep your laundry machine running smoothly.`
  }
];

export default ReadMore;
