import phoneImage from '../../assets/images/image-mockups.png'
import './styles.scss'

export function BlockOne() {
  return (

    <div className=''>
      <div className="bg-intro">
        <img src={phoneImage} alt="main image mobile" className='main-image'/>
      </div>
      <div className="block-one">
        <h1>Next generation digital banking</h1><p> Take your financial life online. Your Easybank account will be a one-stop-shop
          for spending, saving, budgeting, investing, and much more.</p>
        <a href='#' type='button' className='request-button'>Request Invite</a>
      </div>
    </div>

  );
}