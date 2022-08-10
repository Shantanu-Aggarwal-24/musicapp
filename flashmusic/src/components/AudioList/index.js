import { backIcon } from '../../assets';
import { baseUrl } from '../../config';
import './style.css';

const AudioList = ({
    onBackButtonPress,audioList, onTrackSelect
}) => {
    return (
        <div className="audio-ls p-20">
            <div onBackButtonPress={onBackButtonPress} className="audio-ls-header">
                <img  src={backIcon} alt="backicon"/> 
            </div>

             <ul className="mtb-10">
                 {audioList.length ? (
                     audioList.map((item, index) => (
                         <li
                         onClick={() => onTrackSelect(index)}
                         key={index}
                         className="audio-ls-container"
                         >
                         <div className="audio-ls-item flex align-center ptb-5">
                         <div className="audio-img">
                             <img src={`${baseUrl}/${item.avatar}`}/>
                         </div>
                         <div className="audio-info mlr-10">
                           <p>{item.title}</p>
                           <p>{item.artist}</p>
                         </div>
                         </div>
                         </li>
                     ))
                 ):(
                     <p style={{textAlign: "center", fontSize:"16px" }}>
                      No Audio Available      
                     </p>
                 )}
        </ul>

 





            {/* <ul>
                <li className="audio-ls-container mtb-20">
                    <div className="audio-ls-item flex align-center ptb-10">
                        <div className="audio-img">
                            <img src= "" alt=""/>
                        </div>
                        <div className="audio-info mlr-10">
                            <p>crazy ones change the world</p>
                            <p>Shantanu Agarwal</p>
                        </div>
                    </div>

                    <div className="audio-ls-item flex align-center">
                        <div className="audio-img">
                            <img src="" alt="" />
                        </div>
                        <div className="audio-info mlr-10">
                            <p>crazy ones change the world</p>
                            <p>Shantanu Agarwal</p>
                        </div>
                    </div>
                </li>
            </ul> */}

        </div>
    );
}

export default AudioList;