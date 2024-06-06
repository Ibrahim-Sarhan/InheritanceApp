let colectionOfEstate = +prompt("من فضلك أدخل قيمة التركة : ");

let haveWife = confirm("هل لديك زوجة ؟");

if (haveWife == true) {
    // نصيب الزوجة
    let wifeShare = colectionOfEstate / 8; 
    // المتبقي من التركة
    let remainingOfEstate = colectionOfEstate - wifeShare;
    // عدد الاولاد الذكور و الاناث
    let numberOfMales = +prompt("من فضلك أدخل عدد الاولاد الذكور : ");
    let numberOfFemale = +prompt("من فضلك أدخل عدد الاولاد الاناث  : ");
    // قيمة السهم الواحد
    let valueOfEachShare = remainingOfEstate / ((numberOfMales * 2) + numberOfFemale);
    // نصيب الذكور 
    let malesShare = numberOfMales * (2 * valueOfEachShare);
    // نصيب الذكر الواحد
    let shareOfEachmale = malesShare / numberOfMales;
    // نصيب الاناث 
    let femalesShare = numberOfFemale * valueOfEachShare;
    // نصيب الانثي الواحدة
    let shareOfEachFemale = femalesShare / numberOfFemale; 
    
    document.write("نصيب الزوجة :  " + Math.round(wifeShare));
    document.write("نصيب الذكور : " + Math.round(malesShare));
    document.write("نصيب الاناث : " + Math.round(femalesShare));
    document.write("نصيب الذكر الواحد : " + Math.round(shareOfEachmale));
    document.write("نصيب الانثي الواحدة : " + Math.round(shareOfEachFemale));

} else {

    let numberOfMales = +prompt("من فضلك أدخل عدد الاولاد الذكور : ");
    let numberOfFemale = +prompt("من فضلك أدخل عدد الاولاد الاناث  : ");
    let valueOfEachShare = colectionOfEstate / ((numberOfMales * 2) + numberOfFemale);
    let malesShare = numberOfMales * (2 * valueOfEachShare);
    let shareOfEachmale = malesShare / numberOfMales;
    let femalesShare = numberOfFemale * valueOfEachShare;
    let shareOfEachFemale = femalesShare / numberOfFemale; 
    document.write("نصيب الذكور : " + Math.round(malesShare) );
    document.write("نصيب الاناث : " + Math.round(femalesShare) );
    document.write("نصيب الذكر الواحد : " + Math.round(shareOfEachmale) );
    document.write("نصيب الانثي الواحدة : " + Math.round(shareOfEachFemale) );
}