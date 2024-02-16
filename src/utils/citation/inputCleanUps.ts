import { ReferenceInput } from "../../Components/RefBotPage/types"

const inputCleanUps: Record<string, { [K in keyof ReferenceInput]: (value: string) => string; }> = {
    
}

export default inputCleanUps