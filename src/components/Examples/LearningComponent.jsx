import FirstComponenet from './FirstComponent';
import SecondComponenet from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponent() {
    return (
      <div className="LearningComponent">
        <FirstComponenet/>
        <SecondComponenet/>
        <ThirdComponent/>
        <FourthComponent/>
        <LearningJavaScript/>
        </div>
    );
  }