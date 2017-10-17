Jenie.component({
	name: 'swat-patient-caregiver',
	template: `
		<iframe src="https://docs.google.com/a/agapehospiceaz.com/forms/d/e/1FAIpQLSeTkrHMC_K7BHBPEiR5Zd8QNi-RzjRaXx9EdYxqzvBOhvmArA/viewform?embedded=true" frameborder="0"></iframe>
	`
});

	// <div class="row">
	// 	<div class="col-xs-12 form-sec">
	// 		<h3>Patient Caregiver Form</h3>
	// 		<p>Complete after each social work visit. Rate the patient on how well s(h)e is doing on concerns regarding each issue. Rate the primary caregiver on how well s(h)e is doing on each issue, OR on how well s(h)e is coping with patient concerns regarding the issue. If there are no concerns in an area, circle 5 ("extremely well"). Each issue should be assessed during each client contact.</p>
	// 		<form>
	// 			<fieldset>
	// 				<legend><h1>Social Work Assessment Tool (SWAT)</h1></legend>
	// 				<input type="text" class="col-xs-4" name="Patient ID#" placeholder="Patient ID"></input>
	// 				<input type="date" class="col-xs-4" name="Patient ID#" placeholder="Date of Social Work Visits"></input>
	// 				<fieldset class="radio">
	// 					<legend>HOW WELL ARE PATIENT AND PRIMARY CAREGIVER DOING?</legend>
	//
	// 					<ol type="1">
	// 						<li>End of life decisions consistent with their religious and cultural norms.</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="1-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="1-patient" value="2">Disagree
	// 						<input type="radio" name="1-patient" value="3">Neutral
	// 						<input type="radio" name="1-patient" value="4">Agree
	// 						<input type="radio" name="1-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="1-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="1-caregiver" value="2">Disagree
	// 						<input type="radio" name="1-caregiver" value="3">Neutral
	// 						<input type="radio" name="1-caregiver" value="4">Agree
	// 						<input type="radio" name="1-caregiver" value="5">Strongly Agree
	//
	// 						<li>Patient thoughts of suicide or wanting to hasten death.</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="2-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="2-patient" value="2">Disagree
	// 						<input type="radio" name="2-patient" value="3">Neutral
	// 						<input type="radio" name="2-patient" value="4">Agree
	// 						<input type="radio" name="2-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="2-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="2-caregiver" value="2">Disagree
	// 						<input type="radio" name="2-caregiver" value="3">Neutral
	// 						<input type="radio" name="2-caregiver" value="4">Agree
	// 						<input type="radio" name="2-caregiver" value="5">Strongly Agree
	//
	// 						<li>Anxiety about death.</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="3-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="3-patient" value="2">Disagree
	// 						<input type="radio" name="3-patient" value="3">Neutral
	// 						<input type="radio" name="3-patient" value="4">Agree
	// 						<input type="radio" name="3-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="3-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="3-caregiver" value="2">Disagree
	// 						<input type="radio" name="3-caregiver" value="3">Neutral
	// 						<input type="radio" name="3-caregiver" value="4">Agree
	// 						<input type="radio" name="3-caregiver" value="5">Strongly Agree
	//
	// 						<li>Preference about environment (e.g., pets, own bed, etc…).</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="4-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="4-patient" value="2">Disagree
	// 						<input type="radio" name="4-patient" value="3">Neutral
	// 						<input type="radio" name="4-patient" value="4">Agree
	// 						<input type="radio" name="4-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="4-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="4-caregiver" value="2">Disagree
	// 						<input type="radio" name="4-caregiver" value="3">Neutral
	// 						<input type="radio" name="4-caregiver" value="4">Agree
	// 						<input type="radio" name="4-caregiver" value="5">Strongly Agree
	//
	// 						<li>Social Support.</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="5-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="5-patient" value="2">Disagree
	// 						<input type="radio" name="5-patient" value="3">Neutral
	// 						<input type="radio" name="5-patient" value="4">Agree
	// 						<input type="radio" name="5-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="5-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="5-caregiver" value="2">Disagree
	// 						<input type="radio" name="5-caregiver" value="3">Neutral
	// 						<input type="radio" name="5-caregiver" value="4">Agree
	// 						<input type="radio" name="5-caregiver" value="5">Strongly Agree
	//
	// 						<li>Financial Support.</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="6-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="6-patient" value="2">Disagree
	// 						<input type="radio" name="6-patient" value="3">Neutral
	// 						<input type="radio" name="6-patient" value="4">Agree
	// 						<input type="radio" name="6-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="6-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="6-caregiver" value="2">Disagree
	// 						<input type="radio" name="6-caregiver" value="3">Neutral
	// 						<input type="radio" name="6-caregiver" value="4">Agree
	// 						<input type="radio" name="6-caregiver" value="5">Strongly Agree
	//
	// 						<li>Safety Issues.</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="7-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="7-patient" value="2">Disagree
	// 						<input type="radio" name="7-patient" value="3">Neutral
	// 						<input type="radio" name="7-patient" value="4">Agree
	// 						<input type="radio" name="7-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="7-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="7-caregiver" value="2">Disagree
	// 						<input type="radio" name="7-caregiver" value="3">Neutral
	// 						<input type="radio" name="7-caregiver" value="4">Agree
	// 						<input type="radio" name="7-caregiver" value="5">Strongly Agree
	//
	// 						<li>Comfort Issues.</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="8-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="8-patient" value="2">Disagree
	// 						<input type="radio" name="8-patient" value="3">Neutral
	// 						<input type="radio" name="8-patient" value="4">Agree
	// 						<input type="radio" name="8-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="8-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="8-caregiver" value="2">Disagree
	// 						<input type="radio" name="8-caregiver" value="3">Neutral
	// 						<input type="radio" name="8-caregiver" value="4">Agree
	// 						<input type="radio" name="8-caregiver" value="5">Strongly Agree
	//
	// 						<li>Complicated anticipatory gief (e.g., guilt, depression, etc…).</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="9-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="9-patient" value="2">Disagree
	// 						<input type="radio" name="9-patient" value="3">Neutral
	// 						<input type="radio" name="9-patient" value="4">Agree
	// 						<input type="radio" name="9-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="9-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="9-caregiver" value="2">Disagree
	// 						<input type="radio" name="9-caregiver" value="3">Neutral
	// 						<input type="radio" name="9-caregiver" value="4">Agree
	// 						<input type="radio" name="9-caregiver" value="5">Strongly Agree
	//
	// 						<li>Spirituality (e.g., higher purpose in life, sense of connection with all).</li>
	// 						<p><i class="fa fa-heart" aria-hidden="true"></i> <strong>Patient</strong></p>
	// 						<input type="radio" name="10-patient" value="1">Strongly Disagree
	// 						<input type="radio" name="10-patient" value="2">Disagree
	// 						<input type="radio" name="10-patient" value="3">Neutral
	// 						<input type="radio" name="10-patient" value="4">Agree
	// 						<input type="radio" name="10-patient" value="5">Strongly Agree
	// 						<p><i class="fa fa-heart-o" aria-hidden="true"></i> <strong>Primary Caregiver</strong></p>
	// 						<input type="radio" name="10-caregiver" value="1">Strongly Disagree
	// 						<input type="radio" name="10-caregiver" value="2">Disagree
	// 						<input type="radio" name="10-caregiver" value="3">Neutral
	// 						<input type="radio" name="10-caregiver" value="4">Agree
	// 						<input type="radio" name="10-caregiver" value="5">Strongly Agree
	// 					</ol>
	// 					<fieldset>
	// 						<legend>Totals</legend>
	// 						<div class="totals">
	// 							<p><strong>Total Patient Score</strong></p>
	// 							<div class="total-patient">0</div>
	// 							<p><strong>Total PCG Score</strong></p>
	// 							<div class="total-pcg">0</div>
	// 						</div>
	// 					</fieldset>
	// 					<div class="disclaimer">
	// 						<p>NOTE: To calculate total scores: add the score for each item in the patient column to get a total patient score. Add the score for each item in the primary caregiver column to get a total primary caregiver score. </p>
	// 						<p>The Social Work Assessment Tool was developed by the Social Work Outcomes Task Force of the Social Work Section, National Hospice and Palliative Care Organization, National Council of Hospice and Palliative Professionals. Members of the Task Force included Mary Raymer, ACSW, Dona Reese, Ph.D., MSW, Ruth Huber, Ph.D., MSW, Stacy Orloff, Ed. D., LCSW, and Susan Gerbino, Ph.D., MSW. Further information can be obtained f om the Social Worker Section, National Council of Hospice and Palliative Professionals, National Hospice and Palliative Care Organization, (703) 837-1500. </p>
	// 						<p>©2008 National Hospice and Palliative Care Organization. All rights reserved.</p>
	// 					</div>
	// 			</fieldset>
	// 		</form>
	// 	</div>
	// </div>