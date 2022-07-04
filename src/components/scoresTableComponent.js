import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

const ScoresTable = () => {
	const rank = useSelector(store => store.rank);
	
	return (
		<div className="scoreTable">
			<div className="scoreTableRepeat">
				<Table>
					<tbody>
						{rank.map((r,i)=>(
							<tr key={i}>
								<td>{r.name}</td>
								<td className="scoreTableScore">{r.score}</td>
							</tr> 
						))}
					</tbody>
				</Table>
			</div>
			<div className="scoreBottom"></div>
		</div>
	);		
}

export default ScoresTable