import React,{useState} from 'react';

function Faq() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion">
        <h1>FAQ</h1>
        <div  onClick={toggleAccordion}>
          <div>Data Hide</div>
          <div>&#9660;</div>
        </div>
        {isOpen && <div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repudiandae, vero dolore quia illo libero non corporis ratione.</div>}
      </div>
    );
  };

export default Faq;
