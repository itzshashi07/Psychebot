import React from 'react';
import ImageUploading from 'react-images-uploading';
import Profile from '../assets/profile-log.png';
export default function App() {
           const [images, setImages] = React.useState([]);
           const maxNumber = 69;

           const onChange = (imageList, addUpdateIndex) => {
                      console.log(imageList, addUpdateIndex);
                      setImages(imageList);
           };

           return (
                      <div className="App">
                                 <ImageUploading
                                            multiple
                                            value={images}
                                            onChange={onChange}
                                            maxNumber={maxNumber}
                                            dataURLKey="data_url"
                                 >
                                            {({
                                                       imageList,
                                                       onImageUpload,
                                                       onImageUpdate,
                                                       onImageRemove,
                                                       isDragging,
                                                       dragProps,
                                            }) => (
                                                       <div className="upload__image-wrapper">
                                                                  <img
                                                                             src={Profile}
                                                                             style={isDragging ? { color: 'red' } : undefined}
                                                                             onClick={onImageUpload}
                                                                             {...dragProps}
                                                                             className="w-[100px] h-[100px] mt-4"
                                                                  ></img>

                                                                  {imageList.map((image, index) => (
                                                                             <div key={index} className="image-item">
                                                                                        <img src={image['data_url']} alt="" width="100" />
                                                                                        <div className="image-item__btn-wrapper">
                                                                                                   <button
                                                                                                              className=" w-[100px] mt-[-8px] text-[#FFF]  h-[60px] text-[16px] bg-gradient-to-r rounded-[48px] from-cyan-500 to-blue-500"
                                                                                                              onClick={() => onImageUpdate(index)}
                                                                                                   >
                                                                                                              Update
                                                                                                   </button>
                                                                                                   <button
                                                                                                              className="px-4 w-[100px] mt-[-8px] text-[#FFF]  h-[60px] text-[16px] bg-gradient-to-r rounded-[48px] from-[#FF3031] to-[#FF3031]"
                                                                                                              onClick={() => onImageRemove(index)}
                                                                                                   >
                                                                                                              Remove
                                                                                                   </button>
                                                                                        </div>
                                                                             </div>
                                                                  ))}
                                                       </div>
                                            )}
                                 </ImageUploading>
                      </div>
           );
}
