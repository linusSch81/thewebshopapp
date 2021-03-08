import PetStoreAPIService from "../../../shared/apitest/service/PetStoreAPIService";
import { useState, useEffect } from "react";

/*
test a pet:
https://petstore.swagger.io/v2/pet/9998
*/

export const TestApi5 = () => {
	const [petData, setPetData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [petStatus, setPetStatus] = useState<string>("available");

	const fetchData = async () => {
		setLoading(true);
		const { data } = await PetStoreAPIService.findByStatus(petStatus);
		setPetData(data);
		console.log(data);
		setLoading(false);
	};

	const displayData = () => {
		// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role
		if (!loading) {
			const displayPetData = petData.slice(0, 5);

			return (
				<>
					<div
						role={"table"}
						aria-label="Sold Pets"
						aria-rowcount={5}
					>
						<div role="rowgroup">
							<ul role="row">
								<li>
									<strong role="columnheader">Name</strong>
								</li>

								<li>
									<strong role="columnheader">ID</strong>
								</li>

								<li>
									<strong role="columnheader">Tags</strong>
								</li>
							</ul>
						</div>
						<ul role="rowgroup">
							{displayPetData?.map((x: any, index: number) => (
								<li
									key={`petShopWidgetItem${index}`}
									role="row"
									aria-rowindex={index + 1}
								>
									<div role="cell">Name: {x?.name}</div>
									<div role="cell">ID: {x?.id}</div>

									{x?.tags ? (
										<div role="cell">
											Tags: 
                      <ul>
												{x?.tags?.map(
													(
														y: any,
														index2: number
													) => (
														<li
															key={`petShopWidgetItem${index}Tag${index2}`}
														>
															<span className="-tag">
																{y.name}
															</span>
														</li>
													)
												)}
											</ul>
										</div>
									) : (
										<div className="-placeholder" role="cell"></div>
									)}
								</li>
							))}
						</ul>
					</div>
				</>
			);
		}
	};
	const filterHandler = (status: string) => {
		return setPetStatus(status);
	};

	useEffect(() => {
		fetchData();
	}, [petStatus]);
	// https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html
	return (
		<section id="petShopWidget" className="petshopwidget">
		
			<div
				id="petShopWidget_filter"
				role="radiogroup"
				aria-labelledby="petShopWidget_filter_label"
				aria-controls="petShopWidget_filter_result"
			>
				<strong id="petShopWidget_filter_label">Filter options</strong>
				<ul>
					<li>
						<button
							onClick={() => {
								filterHandler("available");
							}}
							className="button"
							role="radio"
							aria-checked="false"
							tabIndex={-1}
						>
							Available
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								filterHandler("pending");
							}}
							className="button"
							role="radio"
							aria-checked="false"
							tabIndex={-1}
						>
							Pending
						</button>
					</li>
					<li>
						<strong
							onClick={() => {
								filterHandler("sold");
							}}
							className="button button-active"
							role="radio"
							aria-checked="true"
							tabIndex={0}
              title="Sold Pets"
              aria-label="Sold Pets"
						>
							Sold
						</strong>
					</li>
				</ul>
			</div>
			<div id="petShopWidget_filter_result">
				{loading ? <div>...</div> : displayData()}
			</div>
			{/* <button
				onClick={() => {
					console.log(petData);
				}}
				className="button"
			>
				Console log data
			</button> */}
		</section>
	);
};
