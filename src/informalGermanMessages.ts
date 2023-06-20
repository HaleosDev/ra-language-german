import {TranslationMessages} from "ra-core"
import {PartialDeep} from "type-fest"
import formalGermanMessages from "./formalGermanMessages"
import merge from "lodash/merge"

const additionalInformalGermanMessages: PartialDeep<TranslationMessages> = {
  ra: {
    message: {
      are_you_sure: "Bist du sicher?",
      bulk_delete_content:
        "Sicher, dass du %{name} löschen willst? |||| Sicher, dass du diese %{smart_count} Elemente löschen willst?",
      bulk_update_content:
        "Sicher, dass du %{name} aktualisieren willst? |||| Sicher, dass du %{smart_count} Elemente aktualisieren willst?",
      clear_array_input: "Sicher, dass du die ganze Liste löschen willst?",
      delete_content: "Sicher, dass du dieses Element löschen willst?",
      error:
        "Ein Fehler trat auf, Deine Anfrage konnte nicht verarbeitet werden.",
      invalid_form: "Das Formular ist ungültig. Bitte überprüfe Deine Eingaben.",
      not_found:
        "Du hast eine falsche URL aufgerufen oder eingegeben.",
      unsaved_changes:
        "Einige Änderungen wurden nicht gespeichert. Sicher, dass du diese nicht übernehmen willst?"
    },
    notification: {
      logged_out: "Deine Sitzung ist abgelaufen, bitte erneut verbinden.",
      not_authorized: "Du bist nicht berechtigt, auf diese Ressource zuzugreifen."
    },
    saved_queries: {
      remove_message:
        "Sicher, dass du diese Anfrage aus der Liste der gespeicherten löschen willst?"
    },
    configurable: {
      inspector: {
        content: "Bewege den Mauszeigen über die UI-Elemente, um sie zu konfigurieren"
      }
    }
  }
}

const informalGermanMessages: TranslationMessages = merge(formalGermanMessages, additionalInformalGermanMessages)

export default informalGermanMessages