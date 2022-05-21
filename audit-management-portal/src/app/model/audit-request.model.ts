import { AuditDetail } from "./audit-detail.model";

export class AuditRequest{

    projectName:string;
    projectManagerName:string;
    applicationOwnerName:string;
    auditDetail:AuditDetail;

    constructor( projectName:string, projectManagerName:string, applicationOwnerName:string, auditDetail:AuditDetail){

    this.projectName=projectName,
    this.projectManagerName=projectManagerName,
    this.applicationOwnerName=applicationOwnerName,
    this.auditDetail=auditDetail

    }

}   