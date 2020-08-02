import React from 'react';

export default function TnxFile(sender, amt, amtword, accountno, accountname, bankname, tnxid, date, remark) {
  return `<html>
			<head>
				<title></title>
			</head>
			<body style="text-align: center; align-items: center;">
				<div>
					<img src="data:image/png;base64,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" width="58px" height="74px" />
					<h3 style="color: #DC6A00;">Fund Transfer</h3>
				</div>
				<div style="margin-top: 20px;">
					<table style="margin-left: auto; margin-right: auto;">
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Transaction Date:</td>
							<td style="padding: 10px; font-size: 13px; color: #333;">` + date + `</td>
						</tr>
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Transaction ID:</td>
							<td style="padding: 10px; font-size: 13px; color: #333;">` + tnxid + `</td>
						</tr>
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Sender:</td>
							<td style="padding: 10px; font-size: 13px; color: #333; text-transform: capitalize;">` + sender + `</td>
						</tr>
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Amount:</td>
							<td style="padding: 10px; font-size: 13px; color: #333;">&#8358;` + amt + `</td>
						</tr>
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Amount in Words:</td>
							<td style="padding: 10px; font-size: 13px; color: #333; text-transform: capitalize;">` + amtword + ` Naira Only</td>
						</tr>
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Beneficiary Name:</td>
							<td style="padding: 10px; font-size: 13px; color: #333; text-transform: capitalize;">` + accountname + `</td>
						</tr>
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Beneficiary No:</td>
							<td style="padding: 10px; font-size: 13px; color: #333;">` + accountno + `</td>
						</tr>
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Bank Name:</td>
							<td style="padding: 10px; font-size: 13px; color: #333; text-transform: capitalize;">` + bankname + `</td>
						</tr>
						<tr style="border-width: 1px; border-color: #D9D5DC;">
							<td style="padding: 10px; background-color: #4A984D; font-size: 13px; color: #fff;">Remark:</td>
							<td style="padding: 10px; font-size: 13px; color: #333;">` + remark + `</td>
						</tr>
					</table>
				</div>
			</body>
		</html>`;
}
