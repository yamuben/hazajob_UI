class JobInfos {
    constructor(id, jobPostedBy,jobPostedByPicture, jobTitle, jobOwner, jobPostionAvailable, jobPostedOn,jobDeadlineOn,from,to,jobType,jobSalary,jobDays,jobCountry,jobProvince,jobDistrict,jobSector,jobDescription,jobQualification,jobRecommandation,jobVisibility,jobApplicantsNo,jobCategory,jobSubCategory,jobEnabled,jobAppOn,jobAppOff,jobAppNoOutof
        ) {
      this.id = id;
      this.jobPostedBy=jobPostedBy;
      this.jobPostedByPicture=jobPostedByPicture;
      this.jobTitle=jobTitle;
      this.jobOwner=jobOwner;
      this.jobPostionAvailable=jobPostionAvailable;
      this.jobPostedOn=jobPostedOn;
      this.jobDeadlineOn=jobDeadlineOn;
      this.from=from;
      this.to=to;
      this.jobType=jobType;
      this.jobSalary=jobSalary;
      this.jobDays=jobDays;
      this.jobCountry=jobCountry;
      this.jobProvince=jobProvince;
      this.jobDistrict=jobDistrict;
      this.jobSector=jobSector;
      this.jobDescription=jobDescription;
      this.jobQualification=jobQualification;
      this.jobRecommandation=jobRecommandation;
      this.jobVisibility=jobVisibility;
      this.jobApplicantsNo=jobApplicantsNo;
      this.jobCategory=jobCategory;
      this.jobSubCategory=jobSubCategory;
      this.jobEnabled=jobEnabled;
      this.jobAppNoOutof=jobAppNoOutof;
      this.jobAppOn=jobAppOn;
      this.jobAppOff=jobAppOff;
    }
  }
  
  export default JobInfos;
  