import React from 'react';
import { useState, useEffect } from 'react';

const TopList = () =>{

	//variables
	const [list, setList] = useState();
	const [error, setError] = useState(null);
    
  //when page created
	useEffect(() =>{
		const getList = async() =>{
			return new Promise(function(resolve, reject){
				setError(null);
				setList(null);
	
				fetch('https://melon.danielko.me/api/v1/chart/live',{ method: "GET" })
				.then(response => response.json())
				.then(response => { resolve(response) })
				.catch(error => { 
					setError(error)
					reject(error); 
				})
		});
	};
        
  //call getList
  getList().then((data) =>{
    const array = []

		for(let key in data){
			array[key] = data[key].name
		}

		setList(array)
		console.log("리스트 불러오기 완료")
    });

  }, []);

	if(error) return <div>오류가 발생하였습니다</div>
	if(!list) return null

	return(
		<div>
			{list.map((value, key) => <li key= {key}> {value} </li>, )}
		</div>
	)
}

export default TopList;