import env from 'react-dotenv';

export class ApiUtils {
    public static apiUrl = env.API_URL;

    public static publicUrl(path: string) {
        return this.apiUrl + '/api/public/' + path;
    }

    public static localUrl(path: string) {
        return this.apiUrl + '/api/local/' + path;
    }

    public static authUrl(path: string) {
        return this.apiUrl + '/api/auth/' + path;
    }

    public static adminUrl(path: string) {
        return this.apiUrl + '/api/admin/' + path;
    }

    public static patientUrl(path: string) {
        return this.apiUrl + '/api/patient/' + path;
    }

}