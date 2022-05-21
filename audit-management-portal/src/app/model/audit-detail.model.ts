export class AuditDetail{

    public auditType:String;
    public auditDate:Date;
    public auditQuestions:number;

    constructor(auditType:String, auditDate:Date, auditQuestions:number ){
        this.auditType = auditType;
        this.auditDate = auditDate;
        this.auditQuestions = auditQuestions;
    }
}