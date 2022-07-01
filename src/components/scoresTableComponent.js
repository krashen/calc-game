import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

const ScoresTable = () => {
	const rank = useSelector(store => store.rank);
	const rankSorted = [...rank].sort((a, b) => {
		return b.score - a.score;
	});
	return (
		<div className="scoreTable">
			<h2>Rank:</h2>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{rankSorted.slice(0,10).map((r,i)=>(
						<tr key={i}>
							<td>{r.name}</td>
							<td>{r.score}</td>
						</tr> 
					))}
				</tbody>
			</Table>
		</div>
	);		
}

export default ScoresTable