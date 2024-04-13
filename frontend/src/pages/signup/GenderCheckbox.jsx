import React from "react";

const GenderCheckbox = () => {
	return (
		<div className="flex">
			<div className="form-control">
				<label className="label gap-2 cursor-pointer">
					<span className="lebel-text">Male</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
			<div>
				<label className="label gap-2 cursor-pointer">
					<span className="lebel-text">Female</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
			<div>
				<label className="label gap-2 cursor-pointer">
					<span className="lebel-text">Other</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;