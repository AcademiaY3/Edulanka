import React from 'react'
import App from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './SideNavigation';
import Content from './content';
function InstructorDetails() {
  return (
    <div>
        <SideNav/>
        <div className="page-content-wrapper border" style={{marginLeft:"270px", marginTop:"20px"}}>
  {/* Title */}
  <div className="row">
    <div className="col-12 mb-3">
      <h1 className="h3 mb-2 mb-sm-0">Instructor detail</h1>
    </div>
  </div>
  <div className="row g-4">
    {/* Personal information START */}
    <div className="col-xxl-7">
      <div className="card bg-transparent border rounded-3 h-100">
        {/* Card header */}
        <div className="card-header bg-light border-bottom">
          <h5 className="card-header-title mb-0">Personal Information</h5>
        </div>
        {/* Card body START */}
        <div className="card-body">
          {/* Profile picture */}
          <div className="avatar avatar-xl mb-3">
            <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/07.jpg" alt />
          </div>
          {/* Information START */}
          <div className="row">
            {/* Information item */}
            <div className="col-md-6">
              <ul className="list-group list-group-borderless">
                <li className="list-group-item">
                  <span>Title:</span>
                  <span className="h6 mb-0">Mr.</span>
                </li>
                <li className="list-group-item">
                  <span>Full Name:</span>
                  <span className="h6 mb-0">Louis Ferguson</span>
                </li>
                <li className="list-group-item">
                  <span>User Name:</span>
                  <span className="h6 mb-0">Lousifer</span>
                </li>
                <li className="list-group-item">
                  <span>Mobile Number:</span>
                  <span className="h6 mb-0">+123 456 789 10</span>
                </li>
              </ul>
            </div>
            {/* Information item */}
            <div className="col-md-6">
              <ul className="list-group list-group-borderless">
                <li className="list-group-item">
                  <span>Email ID:</span>
                  <span className="h6 mb-0">example@gmail.com</span>
                </li>
                <li className="list-group-item">
                  <span>Location:</span>
                  <span className="h6 mb-0">California</span>
                </li>
                <li className="list-group-item">
                  <span>Joining Date:</span>
                  <span className="h6 mb-0">29 Aug 2019</span>
                </li>
              </ul>
            </div>
            {/* Information item */}
            <div className="col-12">
              <ul className="list-group list-group-borderless">
                <li className="list-group-item">
                  <span>Education:</span>
                  <span className="h6 mb-0">Bachelor in Computer Graphics,</span>
                  <span className="h6 mb-0">Masters in Computer Graphics</span>
                </li>
              </ul>
            </div>
            {/* Information item */}
            <div className="col-12">
              <ul className="list-group list-group-borderless">
                <li className="list-group-item d-flex">
                  <span>Description:</span>
                  <p className="h6 mb-0">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Information END */}
        </div>
        {/* Card body END */}
      </div>
    </div>
    {/* Personal information END */}
    {/* Student status chart START */}
    <div className="col-xxl-5">
      <div className="row g-4">
        {/* Active student START */}
        <div className="col-md-6 col-xxl-12">
          <div className="card bg-transparent border overflow-hidden">
            {/* Card header */}
            <div className="card-header bg-light border-bottom">
              <h5 className="card-header-title mb-0">Active Students</h5>
            </div>
            {/* Card body */}
            <div className="card-body p-0" style={{position: 'relative'}}>
              <div className="d-sm-flex justify-content-between p-4">
                <h4 className="text-blue mb-0">984</h4>
                <p className="mb-0"><span className="text-success me-1">0.20%<i className="bi bi-arrow-up" /></span>vs last Week</p>
              </div>
              {/* Apex chart */}
              <div id="activeChartstudent" style={{minHeight: 130}}><div id="apexchartsmqjj8dip" className="apexcharts-canvas apexchartsmqjj8dip apexcharts-theme-light" style={{width: 316, height: 130}}><svg id="SvgjsSvg1105" width={316} height={130} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}><g id="SvgjsG1107" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs1106"><clipPath id="gridRectMaskmqjj8dip"><rect id="SvgjsRect1112" width={324} height={134} x={-4} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath><clipPath id="forecastMaskmqjj8dip" /><clipPath id="nonForecastMaskmqjj8dip" /><clipPath id="gridRectMarkerMaskmqjj8dip"><rect id="SvgjsRect1113" width={320} height={134} x={-2} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath><linearGradient id="SvgjsLinearGradient1118" x1={0} y1={0} x2={0} y2={1}><stop id="SvgjsStop1119" stopOpacity="0.65" stopColor="rgba(12,188,135,0.65)" offset={0} /><stop id="SvgjsStop1120" stopOpacity="0.5" stopColor="rgba(134,222,195,0.5)" offset={1} /><stop id="SvgjsStop1121" stopOpacity="0.5" stopColor="rgba(134,222,195,0.5)" offset={1} /></linearGradient></defs><line id="SvgjsLine1111" x1="134.92857142857142" y1={0} x2="134.92857142857142" y2={130} stroke="#b6b6b6" strokeDasharray={3} className="apexcharts-xcrosshairs" x="134.92857142857142" y={0} width={1} height={130} fill="#b1b9c4" filter="none" fillOpacity="0.9" strokeWidth={1} /><g id="SvgjsG1124" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1125" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)" /></g><g id="SvgjsG1135" className="apexcharts-grid"><g id="SvgjsG1136" className="apexcharts-gridlines-horizontal" style={{display: 'none'}}><line id="SvgjsLine1138" x1={0} y1={0} x2={316} y2={0} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1139" x1={0} y1="18.571428571428573" x2={316} y2="18.571428571428573" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1140" x1={0} y1="37.142857142857146" x2={316} y2="37.142857142857146" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1141" x1={0} y1="55.71428571428572" x2={316} y2="55.71428571428572" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1142" x1={0} y1="74.28571428571429" x2={316} y2="74.28571428571429" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1143" x1={0} y1="92.85714285714286" x2={316} y2="92.85714285714286" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1144" x1={0} y1="111.42857142857143" x2={316} y2="111.42857142857143" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1145" x1={0} y1={130} x2={316} y2={130} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /></g><g id="SvgjsG1137" className="apexcharts-gridlines-vertical" style={{display: 'none'}} /><line id="SvgjsLine1147" x1={0} y1={130} x2={316} y2={130} stroke="transparent" strokeDasharray={0} /><line id="SvgjsLine1146" x1={0} y1={1} x2={0} y2={130} stroke="transparent" strokeDasharray={0} /></g><g id="SvgjsG1114" className="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1115" className="apexcharts-series" seriesname="Conversion" data:longestseries="true" rel={1} data:realindex={0}><path id="SvgjsPath1122" d="M 0 130L 0 111.42857142857142C 15.8 111.42857142857142 29.342857142857145 94.7142857142857 45.142857142857146 94.7142857142857C 60.94285714285715 94.7142857142857 74.4857142857143 55.71428571428571 90.28571428571429 55.71428571428571C 106.08571428571429 55.71428571428571 119.62857142857142 55.71428571428571 135.42857142857142 55.71428571428571C 151.22857142857143 55.71428571428571 164.77142857142857 68.71428571428571 180.57142857142858 68.71428571428571C 196.37142857142857 68.71428571428571 209.9142857142857 89.88571428571427 225.71428571428572 89.88571428571427C 241.5142857142857 89.88571428571427 255.05714285714285 59.8 270.85714285714283 59.8C 286.65714285714284 59.8 300.2 18.571428571428555 316 18.571428571428555C 316 18.571428571428555 316 18.571428571428555 316 130M 316 18.571428571428555z" fill="url(#SvgjsLinearGradient1118)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMaskmqjj8dip)" pathto="M 0 130L 0 111.42857142857142C 15.8 111.42857142857142 29.342857142857145 94.7142857142857 45.142857142857146 94.7142857142857C 60.94285714285715 94.7142857142857 74.4857142857143 55.71428571428571 90.28571428571429 55.71428571428571C 106.08571428571429 55.71428571428571 119.62857142857142 55.71428571428571 135.42857142857142 55.71428571428571C 151.22857142857143 55.71428571428571 164.77142857142857 68.71428571428571 180.57142857142858 68.71428571428571C 196.37142857142857 68.71428571428571 209.9142857142857 89.88571428571427 225.71428571428572 89.88571428571427C 241.5142857142857 89.88571428571427 255.05714285714285 59.8 270.85714285714283 59.8C 286.65714285714284 59.8 300.2 18.571428571428555 316 18.571428571428555C 316 18.571428571428555 316 18.571428571428555 316 130M 316 18.571428571428555z" pathfrom="M -1 148.57142857142856L -1 148.57142857142856L 45.142857142857146 148.57142857142856L 90.28571428571429 148.57142857142856L 135.42857142857142 148.57142857142856L 180.57142857142858 148.57142857142856L 225.71428571428572 148.57142857142856L 270.85714285714283 148.57142857142856L 316 148.57142857142856" /><path id="SvgjsPath1123" d="M 0 111.42857142857142C 15.8 111.42857142857142 29.342857142857145 94.7142857142857 45.142857142857146 94.7142857142857C 60.94285714285715 94.7142857142857 74.4857142857143 55.71428571428571 90.28571428571429 55.71428571428571C 106.08571428571429 55.71428571428571 119.62857142857142 55.71428571428571 135.42857142857142 55.71428571428571C 151.22857142857143 55.71428571428571 164.77142857142857 68.71428571428571 180.57142857142858 68.71428571428571C 196.37142857142857 68.71428571428571 209.9142857142857 89.88571428571427 225.71428571428572 89.88571428571427C 241.5142857142857 89.88571428571427 255.05714285714285 59.8 270.85714285714283 59.8C 286.65714285714284 59.8 300.2 18.571428571428555 316 18.571428571428555" fill="none" fillOpacity={1} stroke="#0cbc87" strokeOpacity={1} strokeLinecap="butt" strokeWidth={4} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMaskmqjj8dip)" pathto="M 0 111.42857142857142C 15.8 111.42857142857142 29.342857142857145 94.7142857142857 45.142857142857146 94.7142857142857C 60.94285714285715 94.7142857142857 74.4857142857143 55.71428571428571 90.28571428571429 55.71428571428571C 106.08571428571429 55.71428571428571 119.62857142857142 55.71428571428571 135.42857142857142 55.71428571428571C 151.22857142857143 55.71428571428571 164.77142857142857 68.71428571428571 180.57142857142858 68.71428571428571C 196.37142857142857 68.71428571428571 209.9142857142857 89.88571428571427 225.71428571428572 89.88571428571427C 241.5142857142857 89.88571428571427 255.05714285714285 59.8 270.85714285714283 59.8C 286.65714285714284 59.8 300.2 18.571428571428555 316 18.571428571428555" pathfrom="M -1 148.57142857142856L -1 148.57142857142856L 45.142857142857146 148.57142857142856L 90.28571428571429 148.57142857142856L 135.42857142857142 148.57142857142856L 180.57142857142858 148.57142857142856L 225.71428571428572 148.57142857142856L 270.85714285714283 148.57142857142856L 316 148.57142857142856" /><g id="SvgjsG1116" className="apexcharts-series-markers-wrap" data:realindex={0}><g className="apexcharts-series-markers"><circle id="SvgjsCircle1153" r={0} cx="135.42857142857142" cy="55.71428571428571" className="apexcharts-marker wkfqq52quf no-pointer-events" stroke="#ffffff" fill="#0cbc87" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0} /></g></g></g><g id="SvgjsG1117" className="apexcharts-datalabels" data:realindex={0} /></g><line id="SvgjsLine1148" x1={0} y1={0} x2={316} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs" /><line id="SvgjsLine1149" x1={0} y1={0} x2={316} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG1150" className="apexcharts-yaxis-annotations" /><g id="SvgjsG1151" className="apexcharts-xaxis-annotations" /><g id="SvgjsG1152" className="apexcharts-point-annotations" /></g><rect id="SvgjsRect1110" width={0} height={0} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fefefe" /><g id="SvgjsG1134" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" /><g id="SvgjsG1108" className="apexcharts-annotations" /></svg><div className="apexcharts-legend" style={{maxHeight: 65}} /><div className="apexcharts-tooltip apexcharts-theme-light" style={{left: '146.429px', top: '58.7143px'}}><div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12}}>Dec 04</div><div className="apexcharts-tooltip-series-group apexcharts-active" style={{order: 1, display: 'flex'}}><span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(12, 188, 135)', display: 'none'}} /><div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12}}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value">500</span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text" /></div></div></div>
              <div className="resize-triggers"><div className="expand-trigger"><div style={{width: 317, height: 213}} /></div><div className="contract-trigger" /></div></div>
          </div>
        </div>
        {/* Active student END */}
        {/* Enrolled START */}
        <div className="col-md-6 col-xxl-12">
          <div className="card bg-transparent border overflow-hidden">
            {/* Card header */}
            <div className="card-header bg-light border-bottom">
              <h5 className="card-header-title mb-0">New Enrollment</h5>
            </div>
            {/* Card body */}
            <div className="card-body p-0" style={{position: 'relative'}}>
              <div className="d-sm-flex justify-content-between p-4">
                <h4 className="text-blue mb-0">140</h4>
                <p className="mb-0"><span className="text-success me-1">0.35%<i className="bi bi-arrow-up" /></span>vs last Week</p>
              </div>
              {/* Apex chart */}
              <div id="activeChartstudent2" style={{minHeight: 130}}><div id="apexcharts1ea138qz" className="apexcharts-canvas apexcharts1ea138qz apexcharts-theme-light" style={{width: 316, height: 130}}><svg id="SvgjsSvg1155" width={316} height={130} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}><g id="SvgjsG1157" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs1156"><clipPath id="gridRectMask1ea138qz"><rect id="SvgjsRect1162" width={324} height={134} x={-4} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath><clipPath id="forecastMask1ea138qz" /><clipPath id="nonForecastMask1ea138qz" /><clipPath id="gridRectMarkerMask1ea138qz"><rect id="SvgjsRect1163" width={320} height={134} x={-2} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath><linearGradient id="SvgjsLinearGradient1168" x1={0} y1={0} x2={0} y2={1}><stop id="SvgjsStop1169" stopOpacity="0.65" stopColor="rgba(111,66,193,0.65)" offset={0} /><stop id="SvgjsStop1170" stopOpacity="0.5" stopColor="rgba(183,161,224,0.5)" offset={1} /><stop id="SvgjsStop1171" stopOpacity="0.5" stopColor="rgba(183,161,224,0.5)" offset={1} /></linearGradient></defs><line id="SvgjsLine1161" x1="315.5" y1={0} x2="315.5" y2={130} stroke="#b6b6b6" strokeDasharray={3} className="apexcharts-xcrosshairs" x="315.5" y={0} width={1} height={130} fill="#b1b9c4" filter="none" fillOpacity="0.9" strokeWidth={1} /><g id="SvgjsG1174" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1175" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)" /></g><g id="SvgjsG1185" className="apexcharts-grid"><g id="SvgjsG1186" className="apexcharts-gridlines-horizontal" style={{display: 'none'}}><line id="SvgjsLine1188" x1={0} y1={0} x2={316} y2={0} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1189" x1={0} y1="18.571428571428573" x2={316} y2="18.571428571428573" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1190" x1={0} y1="37.142857142857146" x2={316} y2="37.142857142857146" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1191" x1={0} y1="55.71428571428572" x2={316} y2="55.71428571428572" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1192" x1={0} y1="74.28571428571429" x2={316} y2="74.28571428571429" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1193" x1={0} y1="92.85714285714286" x2={316} y2="92.85714285714286" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1194" x1={0} y1="111.42857142857143" x2={316} y2="111.42857142857143" stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /><line id="SvgjsLine1195" x1={0} y1={130} x2={316} y2={130} stroke="#e0e0e0" strokeDasharray={0} className="apexcharts-gridline" /></g><g id="SvgjsG1187" className="apexcharts-gridlines-vertical" style={{display: 'none'}} /><line id="SvgjsLine1197" x1={0} y1={130} x2={316} y2={130} stroke="transparent" strokeDasharray={0} /><line id="SvgjsLine1196" x1={0} y1={1} x2={0} y2={130} stroke="transparent" strokeDasharray={0} /></g><g id="SvgjsG1164" className="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1165" className="apexcharts-series" seriesname="Conversion" data:longestseries="true" rel={1} data:realindex={0}><path id="SvgjsPath1172" d="M 0 130L 0 111.42857142857142C 15.8 111.42857142857142 29.342857142857145 94.7142857142857 45.142857142857146 94.7142857142857C 60.94285714285715 94.7142857142857 74.4857142857143 88.2142857142857 90.28571428571429 88.2142857142857C 106.08571428571429 88.2142857142857 119.62857142857142 55.71428571428571 135.42857142857142 55.71428571428571C 151.22857142857143 55.71428571428571 164.77142857142857 37.14285714285714 180.57142857142858 37.14285714285714C 196.37142857142857 37.14285714285714 209.9142857142857 89.88571428571427 225.71428571428572 89.88571428571427C 241.5142857142857 89.88571428571427 255.05714285714285 59.8 270.85714285714283 59.8C 286.65714285714284 59.8 300.2 18.571428571428555 316 18.571428571428555C 316 18.571428571428555 316 18.571428571428555 316 130M 316 18.571428571428555z" fill="url(#SvgjsLinearGradient1168)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMask1ea138qz)" pathto="M 0 130L 0 111.42857142857142C 15.8 111.42857142857142 29.342857142857145 94.7142857142857 45.142857142857146 94.7142857142857C 60.94285714285715 94.7142857142857 74.4857142857143 88.2142857142857 90.28571428571429 88.2142857142857C 106.08571428571429 88.2142857142857 119.62857142857142 55.71428571428571 135.42857142857142 55.71428571428571C 151.22857142857143 55.71428571428571 164.77142857142857 37.14285714285714 180.57142857142858 37.14285714285714C 196.37142857142857 37.14285714285714 209.9142857142857 89.88571428571427 225.71428571428572 89.88571428571427C 241.5142857142857 89.88571428571427 255.05714285714285 59.8 270.85714285714283 59.8C 286.65714285714284 59.8 300.2 18.571428571428555 316 18.571428571428555C 316 18.571428571428555 316 18.571428571428555 316 130M 316 18.571428571428555z" pathfrom="M -1 148.57142857142856L -1 148.57142857142856L 45.142857142857146 148.57142857142856L 90.28571428571429 148.57142857142856L 135.42857142857142 148.57142857142856L 180.57142857142858 148.57142857142856L 225.71428571428572 148.57142857142856L 270.85714285714283 148.57142857142856L 316 148.57142857142856" /><path id="SvgjsPath1173" d="M 0 111.42857142857142C 15.8 111.42857142857142 29.342857142857145 94.7142857142857 45.142857142857146 94.7142857142857C 60.94285714285715 94.7142857142857 74.4857142857143 88.2142857142857 90.28571428571429 88.2142857142857C 106.08571428571429 88.2142857142857 119.62857142857142 55.71428571428571 135.42857142857142 55.71428571428571C 151.22857142857143 55.71428571428571 164.77142857142857 37.14285714285714 180.57142857142858 37.14285714285714C 196.37142857142857 37.14285714285714 209.9142857142857 89.88571428571427 225.71428571428572 89.88571428571427C 241.5142857142857 89.88571428571427 255.05714285714285 59.8 270.85714285714283 59.8C 286.65714285714284 59.8 300.2 18.571428571428555 316 18.571428571428555" fill="none" fillOpacity={1} stroke="#6f42c1" strokeOpacity={1} strokeLinecap="butt" strokeWidth={4} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMask1ea138qz)" pathto="M 0 111.42857142857142C 15.8 111.42857142857142 29.342857142857145 94.7142857142857 45.142857142857146 94.7142857142857C 60.94285714285715 94.7142857142857 74.4857142857143 88.2142857142857 90.28571428571429 88.2142857142857C 106.08571428571429 88.2142857142857 119.62857142857142 55.71428571428571 135.42857142857142 55.71428571428571C 151.22857142857143 55.71428571428571 164.77142857142857 37.14285714285714 180.57142857142858 37.14285714285714C 196.37142857142857 37.14285714285714 209.9142857142857 89.88571428571427 225.71428571428572 89.88571428571427C 241.5142857142857 89.88571428571427 255.05714285714285 59.8 270.85714285714283 59.8C 286.65714285714284 59.8 300.2 18.571428571428555 316 18.571428571428555" pathfrom="M -1 148.57142857142856L -1 148.57142857142856L 45.142857142857146 148.57142857142856L 90.28571428571429 148.57142857142856L 135.42857142857142 148.57142857142856L 180.57142857142858 148.57142857142856L 225.71428571428572 148.57142857142856L 270.85714285714283 148.57142857142856L 316 148.57142857142856" /><g id="SvgjsG1166" className="apexcharts-series-markers-wrap" data:realindex={0}><g className="apexcharts-series-markers"><circle id="SvgjsCircle1203" r={0} cx={316} cy="18.571428571428555" className="apexcharts-marker wqn79bsbi no-pointer-events" stroke="#ffffff" fill="#6f42c1" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" default-marker-size={0} /></g></g></g><g id="SvgjsG1167" className="apexcharts-datalabels" data:realindex={0} /></g><line id="SvgjsLine1198" x1={0} y1={0} x2={316} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} className="apexcharts-ycrosshairs" /><line id="SvgjsLine1199" x1={0} y1={0} x2={316} y2={0} strokeDasharray={0} strokeWidth={0} className="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG1200" className="apexcharts-yaxis-annotations" /><g id="SvgjsG1201" className="apexcharts-xaxis-annotations" /><g id="SvgjsG1202" className="apexcharts-point-annotations" /></g><rect id="SvgjsRect1160" width={0} height={0} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fefefe" /><g id="SvgjsG1184" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" /><g id="SvgjsG1158" className="apexcharts-annotations" /></svg><div className="apexcharts-legend" style={{maxHeight: 65}} /><div className="apexcharts-tooltip apexcharts-theme-light" style={{left: '257.037px', top: '21.5714px'}}><div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12}}>Dec 08</div><div className="apexcharts-tooltip-series-group apexcharts-active" style={{order: 1, display: 'flex'}}><span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(111, 66, 193)', display: 'none'}} /><div className="apexcharts-tooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12}}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value">700</span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text" /></div></div></div>
              <div className="resize-triggers"><div className="expand-trigger"><div style={{width: 317, height: 213}} /></div><div className="contract-trigger" /></div></div>
          </div>
        </div>
        {/* Enrolled END */}
      </div>
    </div>
    {/* Student status chart END */}
    {/* Instructor course list START */}
    <div className="col-12">
      <div className="card bg-transparent border h-100">
  
        
        {/* Card footer END */}
      </div>
    </div>

  </div> {/* Row END */}
</div>



    </div>
  )
}

export default InstructorDetails